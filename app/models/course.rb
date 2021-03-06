# The Course class provides information about an individual course. Each course is related to one or more CourseGroup,
# Section and Term.
#
# Attributes are stored as follows:
#
#   * +:course_number+ is the four digit course number for a specific course
#   * +:instructional_unit+ represents the acronym that precedes a course number
#   * +:name+ provides a descriptive title for the course
#   * +:credit_hours+ provides the number of credit hours counted toward degree
class Course < ActiveRecord::Base
  validates :course_number, presence: true, numericality: true
  validates :instructional_unit, presence: true
  validates :name, presence: true
  validates :credit_hours, presence: true, numericality: { only_integer: true }

  has_many :sections
  has_many :pre_requisites, class_name: 'RequirementGroup', as: :owner
  has_and_belongs_to_many :terms
  has_and_belongs_to_many :course_groups

  after_commit :flush_cache

  # Finds and caches the resulting Course using the cache to limit future database queries
  #
  # Returns:
  #
  #   * Cached Course with the given `id`
  def self.cached_find id
    Rails.cache.fetch([id, name], expires_in: 1.hour) { find id }
  end

  # Removes the designated Course from the cache when called, intended to be called by the `after_commit` action in
  # order to maintain the freshness of the cache after objects are touched.
  def flush_cache
    Rails.cache.delete([self.class.name, id])
  end
end
