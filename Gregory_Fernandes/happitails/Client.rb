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
    @pets.map {|name, value| value.display}
    puts "\n"
  end 

  def adopt_animal pet
    @pets[pet.name] = pet
  end

  def up_for_adoption pet_name
    @pets.delete(pet_name)   #this gets returned
  end

end