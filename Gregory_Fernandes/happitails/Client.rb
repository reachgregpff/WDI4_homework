class Client

  attr_reader :name, :number_of_children, :age

  def initialize(name, number_of_children, age, pets)
    @name = name
    @number_of_children = number_of_children
    @age = age
    @pets = pets
  end

  def display
    puts Rainbow("Client Name: #{@name}").black.bg(:yellow)
    puts "Number of children: #{@number_of_children}, age: #{@age}."
    puts Rainbow("Pets owned by this client: ").underline
    #@pets.map { | pet | pet.display}
    @pets.map {|name, value| value.display}
    puts "\n"
  end 

  def adopt_animal pet
    @pets[pet.name] = pet
  end

  #def up_for_adoption pet_name
  #  for i in 0..(@pets.length-1)
  #    if @pets[i].name == pet_name
  #      pet_index = i
  #    end
  #  end
  #  delete_this_pet = @pets.delete_at(pet_index)   #this returns the deleted pet
  #  return delete_this_pet
  #end

  def up_for_adoption pet_name
    @pets.delete(pet_name)   #this gets returned
  end

end