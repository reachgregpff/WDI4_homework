require 'active_record'

options = {
  adapter: 'postgresql',
  username: 'greg',       #you probably dont need this
  database: 'movies_app'
}

ActiveRecord::Base.establish_connection(options)
