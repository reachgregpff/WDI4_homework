# https://github.com/sickill/rainbow

require 'pry'
require './Animal'
require './Client'
require 'rainbow'

$shelter = [           #array of hashes of objects
    animals = {     #this hash will hold animal objects 
    },
    clients = {     #this hash will hold client objects 
    }
]

#add some animals to start with
goofy = Animal.new("Goofy", 12, "male", "canine", ["bone", "chew_toy"])
sylvester = Animal.new("Sylvester", 9, "male", "feline", ["wool ball", "scratch pole"])
stuart = Animal.new("Stuart Little", 1, "male", "mus", ["scooter", "sail boat"])

joey = Animal.new("Joey", 10, "male", "marsupial", ["boxing gloves", "pogo stick"])
tweety = Animal.new("Tweety", 1, "female", "avian", ["seeds"])

#add animals to the shelter
 $shelter[0][tweety.name] = tweety
 $shelter[0][joey.name] = joey

#add some clients (with pets) to the shelter
homer_pets = []
lisa_pets = []
homer_pets << goofy
lisa_pets << sylvester << stuart

homer = Client.new("Homer Simpson", 2, 40, homer_pets)
lisa = Client.new("Lisa Simpson", 0, 10, lisa_pets)

$shelter[1][homer.name] = homer 
$shelter[1][lisa.name] = lisa 

#functions 

def create_animal
  puts "Enter the Animal's name:"
  name = gets.chomp
  puts "Enter age:"
  age = gets.chomp
  puts "Enter gender:"
  gender = gets.chomp
  puts "Enter species:"
  species = gets.chomp
  puts "How many toys does the animal have?"
  toy_count = gets.chomp.to_i
  toys = []
  for i in 0..(toy_count-1) do
    puts "Enter toy #{i}"
    toys[i] = gets.chomp
    i = i+1
  end
  Animal.new(name, age, gender, species, toys)
end

def create_client
  puts "Enter the Client's name:"
  name = gets.chomp
  puts "Enter number of children:"
  number_of_children = gets.chomp
  puts "Enter age:"
  age = gets.chomp
  puts "How many pets does the client have?"
  pet_count = gets.chomp.to_i
  pets = []
  for i in 0..(pet_count-1) do
    pets << create_animal
    i = i+1
  end
  Client.new(name, number_of_children, age, pets)
end


#Now that we have a few clients and animals in the shelter, we can add more
while true

  puts Rainbow("What do you want to do?").black.bg(:magenta).blink
  puts Rainbow("*   Display all animals:           Enter 1").red.bg(:cyan)
  puts Rainbow("*   Display all clients:           Enter 2").red.bg(:cyan)
  puts Rainbow("*   Create an animal:              Enter 3").red.bg(:cyan)
  puts Rainbow("*   Create a client:               Enter 4").red.bg(:cyan)
  puts Rainbow("*   Adopt an animal:               Enter 5").red.bg(:cyan)
  puts Rainbow("*   Put an animal up for adoption: Enter 6").red.bg(:cyan)
  puts Rainbow("*   Quit:                          Enter 7").red.bg(:cyan)
  puts Rainbow("YOUR INPUT :").black.bg(:cyan).blink

  input = gets.chomp
   
  if input == '1'   #isplay all animals
    puts $shelter[0].map {|name, value| value.display}
  elsif input == '2'   #Display all clients
    puts $shelter[1].map {|name, value| value.display}
  elsif input == '3'   #Create an animal
    new_animal = create_animal
    $shelter[0][new_animal.name] = new_animal  
  elsif input == '4'    #Create a client
    new_client = create_client
    $shelter[1][new_client.name] = new_client
  elsif input == '5'    #Adopt an animal
    puts "Please enter the client name"
    client_name = gets.chomp
    puts "Please enter the name of the animal that you want to adopt: "
    animal_for_adoption = gets.chomp
    #delete the animal
    removed_animal = $shelter[0].delete animal_for_adoption
    #client adopts the animal
    $shelter[1][client_name].adopt_animal removed_animal
  elsif input == '6'    #Put an animal up for adoption
    puts "Please enter the client name"
    client_name = gets.chomp
    puts "Please enter the name of the animal that you want to put up for adoption: "
    animal_for_adoption = gets.chomp
    #delete the animal from the client's pets array
    removed_animal = $shelter[1][client_name].up_for_adoption animal_for_adoption
    #add the pet to  animals
    $shelter[0][removed_animal.name] = removed_animal
  elsif input == '7'
    puts "Goodbye!"
    exit  
  end

end

binding.pry