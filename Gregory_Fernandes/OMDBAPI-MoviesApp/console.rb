require 'active_record'
require 'pry'

#shows the sql in the terminal
ActiveRecord::Base.logger = Logger.new(STDERR)

require_relative 'db_config'
require_relative 'models/movie'

binding.pry