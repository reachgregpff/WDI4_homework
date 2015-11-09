class PagesController < ActionController::Base
  

  def home

    @planets = Planet.all

  end


  def about

  end



end