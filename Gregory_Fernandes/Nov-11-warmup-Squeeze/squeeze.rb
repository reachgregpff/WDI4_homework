def squeeze squeeze_me
  squeeze_me = squeeze_me.split('')
  previous_letter = nil
  i_am_squeezed = []

  squeeze_me.each do | letter |
    if letter != previous_letter
      i_am_squeezed.push letter
    end
    previous_letter = letter
  end
  i_am_squeezed.join('')
end







puts "-----------------------------------------"
puts "BEFORE SQUEEZING: " + "banana"
puts "AFTER SQUEEZING:  "  +  squeeze("banana")
puts "-----------------------------------------"

puts "BEFORE SQUEEZING: " + "shmeeeeeee!"
puts "AFTER SQUEEZING:  "  +  squeeze("shmeeeeeee!")
puts "-----------------------------------------"

puts "BEFORE SQUEEZING: " + "yabba dabba doo"
puts "AFTER SQUEEZING:  "  +  squeeze("yabba dabba doo")
puts "-----------------------------------------"

puts "BEFORE SQUEEZING: " + "AW-WEE-OO KILLER TOFU"
puts "AFTER SQUEEZING:  "  +  squeeze("AW-WEE-OO KILLER TOFU")
puts "-----------------------------------------"

