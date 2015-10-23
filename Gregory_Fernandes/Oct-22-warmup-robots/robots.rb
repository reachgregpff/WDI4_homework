class Robot

  $instr_count =0
  $time_created = nil
  $time_rebooted = nil

  def initialize
    $time_created = Time.now
    @name = generate_name
    @mac_address = "#{rand(255)}.#{rand(255)}.#{rand(255)}.#{rand(255)}"
  end

  def generate_name
    #@name = "#{('A'..'Z').to_a.sample(2).join('')}#{rand(1000)}"
    @name = "#{('AA'..'ZZ').to_a.sample}#{rand(1000)}"
  end

  def name
    $instr_count = $instr_count + 1
    @name
  end

  def mac_address
    $instr_count = $instr_count + 1
    @mac_address
  end

  def reset
    $time_rebooted = Time.now
    $instr_count = $instr_count + 1
    @name = generate_name
  end

  def instruction_count
    $instr_count
  end

  def timers
    $instr_count = $instr_count + 1
    t_now = Time.now
    puts "#{t_now-$time_rebooted} seconds since last boot, #{t_now-$time_created} seconds since creation"
  end

end





puts "\nRobot 1: "
robot1 = Robot.new
puts robot1.name
puts robot1.name
puts robot1.name
puts robot1.mac_address

puts "\nRobot 2: "
robot2 = Robot.new
puts robot2.name
puts robot2.name
puts robot2.name
puts robot2.mac_address

puts "\nRobot 3: "
robot3 = Robot.new
puts robot3.name
puts robot3.name
puts robot3.name
puts robot3.name
puts robot3.name
puts robot3.name
puts robot3.name
puts robot3.reset
puts robot3.timers # => "21 seconds since last boot, 21 seconds since creation"
puts robot3.name
puts "Resetting to factory settings."
robot3.reset
puts robot3.timers # => "8 seconds since last boot, 29 seconds since creation"
puts robot3.name
puts robot3.mac_address
puts robot3.instruction_count
