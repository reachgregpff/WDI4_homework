
#Round 1
puts "\nROUND 1"

def lengths my_string_array
  count_array = []
  my_string_array.each do | elem |
    count_array.push elem.length 
  end
  puts count_array
end

words = ["hello", "what", "is", "up", "dude"]
puts lengths words


#Round 2
puts "\nROUND 2"

def transmogrifier num1, num2, num3
  (num1 * num2)**num3
end

puts "Transmorgrifier of 5, 4, 3 is   #{transmogrifier 5, 4, 3}"
puts "Transmorgrifier of 13, 12, 5 is   #{transmogrifier 13, 12, 5}"
puts "Transmorgrifier of 42, 13, 7 is   #{transmogrifier 42, 13, 7}"

#Round 3
puts "\nROUND 3"

def toonify accent, sentence
  if accent == "daffy"
    sentence.gsub "s", "th"
  elsif accent == "elmer"
    sentence.gsub "r", "w"
  else
    sentence
  end
end 

puts toonify "daffy", "so you smell like sausage."
puts toonify "elmer", "rain rain go away, roger wants to play."
puts toonify "tweety", "I thought I saw a pussy cat."

#Round 4
puts "\nROUND 4"

def wordReverse forward_string
  
  forward_array = forward_string.split " "
  forward_array.reverse.join " "
  
end

puts wordReverse "Now I know what a TV dinner feels like"


#Round 5
puts "\nROUND 5"

def letterReverse forward_string

  backward_array = []
  
  forward_array = forward_string.split " "
  forward_array.each do | elem |
    backward_array.push elem.reverse
  end
  backward_array.join " "

end

puts letterReverse "Now I know what a TV dinner feels like"
# => "woN I wonk tahw a VT rennid sleef ekil"
puts letterReverse "Put Hans back on the line"
# => "tuP snaH kcab no eht enil"


#Round 6
puts "\nROUND 6"

def longest words
  longest_length = 0;
  longest_word = "";

  #puts words.max_by(&:length)

  words.each do | elem |

    if elem.length > longest_length
      longest_length = elem.length;
      longest_word = elem;
    end

  end

  longest_word
end

puts longest(["oh", "good", "grief"]) # => "grief"
puts longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# => "unrequited"