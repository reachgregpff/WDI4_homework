class Animal

  attr_reader :name, :age, :gender, :species

  def initialize(name, age, gender, species, toys)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = toys
  end

  def display
    puts Rainbow(" Animal Name: #{@name}").red.bg(:green)
    puts "Age: #{@age}, gender: #{@gender}, species: #{@species}."
    puts Rainbow("This animal's toys: ").underline
    puts toys = @toys.map {|toy| "'#{toy}'"}
  end
  
end