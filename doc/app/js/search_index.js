var search_data = {"index":{"searchIndex":["applicationcontroller","applicationhelper","college","completion","course","coursegroup","genschedulehelper","mockschedule","schedulegenerator","location","rgeo","person","preference","publiccontroller","requirementgroup","schedule","schedulescontroller","section","term","user","assign_class_section!()","configure_permitted_parameters()","eql?()","evaluate!()","evaluate_population()","evolve_schedules()","exchange_genes!()","fill_schedule!()","generate_schedules()","generate_schedules_easy()","hash()","home()","index()","is_valid?()","mutate!()","new()","new_generation!()","preferences()","reset!()","safe_assignment?()","select_mate()","set_class_sections()","sexes()","show()","suffixes()","titles()","unassign_class_section!()","gemfile","gemfile.lock","readme","rakefile","application.coffee","application.scss","foundation_and_overrides.scss","application.css","application.js","index.html","404.html","422.html","500.html","favicon.ico","robots","rich.html","rich.html"],"longSearchIndex":["applicationcontroller","applicationhelper","college","completion","course","coursegroup","genschedulehelper","genschedulehelper::mockschedule","genschedulehelper::schedulegenerator","location","location::rgeo","person","preference","publiccontroller","requirementgroup","schedule","schedulescontroller","section","term","user","genschedulehelper::mockschedule#assign_class_section!()","applicationcontroller#configure_permitted_parameters()","genschedulehelper::mockschedule#eql?()","genschedulehelper::mockschedule#evaluate!()","genschedulehelper::schedulegenerator#evaluate_population()","genschedulehelper::schedulegenerator#evolve_schedules()","genschedulehelper::schedulegenerator#exchange_genes!()","genschedulehelper::mockschedule#fill_schedule!()","genschedulehelper::schedulegenerator#generate_schedules()","genschedulehelper::schedulegenerator#generate_schedules_easy()","genschedulehelper::mockschedule#hash()","publiccontroller#home()","schedulescontroller#index()","genschedulehelper::mockschedule#is_valid?()","genschedulehelper::schedulegenerator#mutate!()","genschedulehelper::mockschedule::new()","genschedulehelper::schedulegenerator#new_generation!()","genschedulehelper::mockschedule#preferences()","genschedulehelper::mockschedule#reset!()","genschedulehelper::mockschedule#safe_assignment?()","genschedulehelper::schedulegenerator#select_mate()","genschedulehelper::mockschedule#set_class_sections()","person::sexes()","schedulescontroller#show()","person::suffixes()","person::titles()","genschedulehelper::mockschedule#unassign_class_section!()","","","","","","","","","","","","","","","","",""],"info":[["ApplicationController","","classes/ApplicationController.html","","<p>The ApplicationController is the superclass for all controllers in the\napplication and can be used to …\n"],["ApplicationHelper","","classes/ApplicationHelper.html","","<p>The ApplicationHelper module contains utility methods which are useful to\nmultiple portions of the application. …\n"],["College","","classes/College.html","","<p>The College class represents the entity college in a university (eg. the\nCollege of Engineering, College …\n"],["Completion","","classes/Completion.html","","<p>The Completion class represents a course which a student has taken,\nrelating a User and Course while …\n"],["Course","","classes/Course.html","","<p>The Course class provides information about an individual course. Each\ncourse is related to one or more …\n"],["CourseGroup","","classes/CourseGroup.html","","<p>The CourseGroup class holds a set of courses that are evaluated together\nand relate to a users major. …\n"],["GenScheduleHelper","","classes/GenScheduleHelper.html","",""],["GenScheduleHelper::MockSchedule","","classes/GenScheduleHelper/MockSchedule.html","","<p>The MockSchedule class represents a simple mock-up of a Schedule&#39;s\ncontent for the purpose of generating …\n"],["GenScheduleHelper::ScheduleGenerator","","classes/GenScheduleHelper/ScheduleGenerator.html","",""],["Location","","classes/Location.html","","<p>The Location class represents the location of a building, storing both its\nstreet address and a spatial …\n"],["Location::RGeo","","classes/Location/RGeo.html","",""],["Person","","classes/Person.html","","<p>The Person class represents a real world person.\n<p>Attributes are stored as follows:\n<p><code>:name</code> stores the name …\n"],["Preference","","classes/Preference.html","","<p>The Preference class represents the preferences expressed by a user. These\ninclude importance of distance, …\n"],["PublicController","","classes/PublicController.html","",""],["RequirementGroup","","classes/RequirementGroup.html","","<p>The RequirementGroup class represents a set of Courses and associates a\ncompletion rule to that Course …\n"],["Schedule","","classes/Schedule.html","","<p>The Schedule class represents a possible schedule for the user. It will be\nscored based on a scheduling …\n"],["SchedulesController","","classes/SchedulesController.html","","<p>The SchedulesController handles requests for generating a new schedule, as\nwell as displaying the results …\n"],["Section","","classes/Section.html","","<p>The Section class represents a single section of a course that is offered\nby the College during a term. …\n"],["Term","","classes/Term.html","","<p>A Term represents a period of time in which a Course may be offered.\n<p>Attributes are stored as follows: …\n"],["User","","classes/User.html","","<p>The User class represents a user in the application, which is understood to\nmean a person seeking to …\n"],["assign_class_section!","GenScheduleHelper::MockSchedule","classes/GenScheduleHelper/MockSchedule.html#method-i-assign_class_section-21","(class_section)","<p>Adds a class section to the class section set of <code>self</code>.\n<p>Returns:\n<p>The class section set of <code>self</code> if the class …\n"],["configure_permitted_parameters","ApplicationController","classes/ApplicationController.html#method-i-configure_permitted_parameters","()","<p>Add parameters to the list of allowed params on the appropriate Devise\ncontrollers in order to facilitate …\n"],["eql?","GenScheduleHelper::MockSchedule","classes/GenScheduleHelper/MockSchedule.html#method-i-eql-3F","(other_schedule)","<p>Overrides Object&#39;s standard <code>eql?</code> method.\n<p>Returns:\n<p><code>true</code> if the set of class sections in <code>self</code> is\nequal …\n"],["evaluate!","GenScheduleHelper::MockSchedule","classes/GenScheduleHelper/MockSchedule.html#method-i-evaluate-21","()","<p>Assigns a score of <code>self</code> based on how well +self fits\npreferences (specified by <code>preferences</code>) the following …\n"],["evaluate_population","GenScheduleHelper::ScheduleGenerator","classes/GenScheduleHelper/ScheduleGenerator.html#method-i-evaluate_population","(schedule_set)",""],["evolve_schedules","GenScheduleHelper::ScheduleGenerator","classes/GenScheduleHelper/ScheduleGenerator.html#method-i-evolve_schedules","(class_section_set)",""],["exchange_genes!","GenScheduleHelper::ScheduleGenerator","classes/GenScheduleHelper/ScheduleGenerator.html#method-i-exchange_genes-21","(schedule, other_schedule)",""],["fill_schedule!","GenScheduleHelper::MockSchedule","classes/GenScheduleHelper/MockSchedule.html#method-i-fill_schedule-21","(class_section_set)","<p>Fills <code>self</code> with class sections from a set of class sections. A\nfull MockSchedule is one with the number …\n"],["generate_schedules","GenScheduleHelper::ScheduleGenerator","classes/GenScheduleHelper/ScheduleGenerator.html#method-i-generate_schedules","(class_section_set, preferences)",""],["generate_schedules_easy","GenScheduleHelper::ScheduleGenerator","classes/GenScheduleHelper/ScheduleGenerator.html#method-i-generate_schedules_easy","(class_section_set, preferences)",""],["hash","GenScheduleHelper::MockSchedule","classes/GenScheduleHelper/MockSchedule.html#method-i-hash","()","<p>Overrides Object&#39;s standard <code>hash</code> method.\n<p>Returns:\n<p>A <code>hash</code> representation of the class sections found …\n"],["home","PublicController","classes/PublicController.html#method-i-home","()",""],["index","SchedulesController","classes/SchedulesController.html#method-i-index","()",""],["is_valid?","GenScheduleHelper::MockSchedule","classes/GenScheduleHelper/MockSchedule.html#method-i-is_valid-3F","()","<p>Checks if <code>self</code> is a valid representation of a Schedule based\non <code>preferences</code>.\n<p>Returns:\n<p><code>true</code> if <code>self</code> is a …\n"],["mutate!","GenScheduleHelper::ScheduleGenerator","classes/GenScheduleHelper/ScheduleGenerator.html#method-i-mutate-21","(schedule, class_section_set)",""],["new","GenScheduleHelper::MockSchedule","classes/GenScheduleHelper/MockSchedule.html#method-c-new","(preferences)","<p>Initialize an empty MockSchedule with a set of user preferences.\n<p>Parameters:\n<p><code>preferences</code> - The <code>hstore</code> preferences …\n"],["new_generation!","GenScheduleHelper::ScheduleGenerator","classes/GenScheduleHelper/ScheduleGenerator.html#method-i-new_generation-21","(schedule_set, class_section_set)",""],["preferences","GenScheduleHelper::MockSchedule","classes/GenScheduleHelper/MockSchedule.html#method-i-preferences","()","<p>Returns a reference to the class level <code>hstore</code> preferences\nobject that was used to create <code>self</code> and other …\n"],["reset!","GenScheduleHelper::MockSchedule","classes/GenScheduleHelper/MockSchedule.html#method-i-reset-21","(class_section_set)","<p>Resets <code>self</code>&#39;s class section set with a new, random, and\nfull class section set.\n<p>Returns:\n<p>The result …\n"],["safe_assignment?","GenScheduleHelper::MockSchedule","classes/GenScheduleHelper/MockSchedule.html#method-i-safe_assignment-3F","(class_section)","<p>Checks if <code>class_section</code> is able to be added to\n<code>self</code> based on the contents of <code>self</code>&#39;s class\nsection …\n"],["select_mate","GenScheduleHelper::ScheduleGenerator","classes/GenScheduleHelper/ScheduleGenerator.html#method-i-select_mate","(schedule, schedule_set)",""],["set_class_sections","GenScheduleHelper::MockSchedule","classes/GenScheduleHelper/MockSchedule.html#method-i-set_class_sections","(class_section_set)","<p>Replaces <code>self</code>&#39;s class section set with that of\n<code>class_section_set</code>. This does <em>not</em> guarantee that\n<code>self</code> …\n"],["sexes","Person","classes/Person.html#method-c-sexes","()","<p>Gets the set of sexes which are valid\n<p>Returns:\n<p>an array of sexes which will be accepted by the inclusion …\n"],["show","SchedulesController","classes/SchedulesController.html#method-i-show","()",""],["suffixes","Person","classes/Person.html#method-c-suffixes","()","<p>Gets the set of words which are valid suffixes\n<p>Returns:\n<p>an array of suffixes which will be accepted by …\n"],["titles","Person","classes/Person.html#method-c-titles","()","<p>Gets the set of words which are valid titles\n<p>Returns:\n<p>an array of titles which will be accepted by the …\n"],["unassign_class_section!","GenScheduleHelper::MockSchedule","classes/GenScheduleHelper/MockSchedule.html#method-i-unassign_class_section-21","(class_section)","<p>Removes a class section from the class section set of <code>self</code>.\n<p>Returns:\n<p>The class section set of <code>self</code> if the …\n"],["Gemfile","","files/Gemfile.html","","<p>source &#39;rubygems.org&#39;\n<p># Travis CI requirement; probably not bad to have here anyway gem\n&#39;rake&#39; …\n"],["Gemfile.lock","","files/Gemfile_lock.html","","<p>GEM\n\n<pre><code>remote: https://rubygems.org/\nspecs:\n  actionmailer (4.1.4)\n    actionpack (= 4.1.4)\n    actionview ...</code></pre>\n"],["README","","files/README_md.html","","<p><img src=\"https://codeclimate.com/github/jimcavoli/College-Reaper.png\"> <img src=\"https://travis-ci.org/jimcavoli/College-Reaper.svg?branch=master\"> …\n"],["Rakefile","","files/Rakefile.html","","<p># Add your own tasks in files placed in lib/tasks ending in .rake, # for\nexample lib/tasks/capistrano.rake …\n"],["application.coffee","","files/app/assets/javascripts/application_coffee.html","","<p># This is a manifest file that&#39;ll be compiled into application.js,\nwhich will include all the files …\n"],["application.scss","","files/app/assets/stylesheets/application_scss.html","","\n<pre><code>This is a manifest file that&#39;ll be compiled into application.css, which will include all the files\nlisted ...</code></pre>\n"],["foundation_and_overrides.scss","","files/app/assets/stylesheets/foundation_and_overrides_scss.html","","<p>// Foundation by ZURB // foundation.zurb.com // Licensed under MIT Open\nSource\n<p>// // FOUNDATION SETTINGS …\n"],["application.css","","files/coverage/assets/0_8_0/application_css.html","","\n<pre><code>  -----------------------------------------------------------------------\n\nBlueprint CSS Framework 0.9 ...</code></pre>\n"],["application.js","","files/coverage/assets/0_8_0/application_js.html","","\n<pre><code>!\n jQuery JavaScript Library v1.6.2\n http://jquery.com/\n\n Copyright 2011, John Resig\n Dual licensed under ...</code></pre>\n"],["index.html","","files/coverage/index_html.html","","<p>&lt;!DOCTYPE html&gt; &lt;html xmlns=&#39;www.w3.org/1999/xhtml&#39;&gt;\n\n<pre><code>&lt;head&gt;\n  &lt;title&gt;Code coverage ...</code></pre>\n"],["404.html","","files/public/404_html.html","","<p>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;\n\n<pre><code>&lt;title&gt;The page you were looking for doesn&#39;t exist (404)&lt;/title&gt; ...</code></pre>\n"],["422.html","","files/public/422_html.html","","<p>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;\n\n<pre><code>&lt;title&gt;The change you wanted was rejected (422)&lt;/title&gt; ...</code></pre>\n"],["500.html","","files/public/500_html.html","","<p>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;\n\n<pre><code>&lt;title&gt;We&#39;re sorry, but something went wrong (500)&lt;/title&gt; ...</code></pre>\n"],["favicon.ico","","files/public/favicon_ico.html","",""],["robots","","files/public/robots_txt.html","","<p>See www.robotstxt.org/robotstxt.html for documentation on how to use the\nrobots.txt file\n<p>To ban all spiders …\n"],["rich.html","","files/tmp/letter_opener/1406501314_302a742/rich_html.html","","<p>&lt;html&gt;\n\n<pre><code>&lt;head&gt;\n  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;\n\n    &lt;title&gt;Confirmation ...</code></pre>\n"],["rich.html","","files/tmp/letter_opener/1406506506_930d75f/rich_html.html","","<p>&lt;html&gt;\n\n<pre><code>&lt;head&gt;\n  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;\n\n    &lt;title&gt;Confirmation ...</code></pre>\n"]]}}