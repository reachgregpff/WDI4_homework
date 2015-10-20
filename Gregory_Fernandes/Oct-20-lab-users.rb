
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  }
}


#1. How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
puts users["Jonathan"][:twitter]

#2. How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push 7

#3. How would you add yourself to the users hash?  - ------------ NOT WORKING
users["Greg"] =  {
                      :twitter => "gregpff",
                      :favorite_numbers => [7, 42]     
                  }

#4. How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]


#5. How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].sort.first

#6. How would you return an array of Anil's favorite numbers that are also even?
even = []
users["Anil"][:favorite_numbers].each  do |elem| 
  if (elem % 2) == 0
    even.push elem
  end
end
puts even

#7. How would you return an array of the favorite numbers common to all users?
users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]


#8. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
((users["Jonathan"][:favorite_numbers].concat users["Erik"][:favorite_numbers]).concat users["Anil"][:favorite_numbers]).uniq



