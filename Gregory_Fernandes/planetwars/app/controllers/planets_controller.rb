class PlanetsController < ActionController::Base

  def index

    @planets = Planet.all

  end




  def new

    @planet = Planet.new

  end



  def create

    @planet = Planet.new(planet_params)
    @planet.save
    redirect_to '/planets'

  end

  def edit

    @planet = Planet.find( params[:id] )

  end

  def update

    @planet = Planet.find( params[:id] )
    @planet.update( planet_params)
    redirect_to '/planets'

  end

  def destroy
    @planet = Planet.find(params[:id])     #retrieve existing record from db
    @planet.destroy        #get params throughthe white listed method
    redirect_to '/planets'        #redirect to a safe 
  end

  def planet_params 
    #allow these params to be updated
    params.require(:planet).permit(:name, :image_url)
  end

  
end