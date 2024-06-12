fun main(){
    println(multiply(5, 4))
    println(multiplySingleLine(5, 4))
    greet("Kotlin")
    displayDetails("John", 25, "USA")
    println(average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
}

fun multiply (a: Int, b: Int): Int {
    return a * b
}

fun greet(name: String = "World") {
    println("Hello, $name")
}

fun displayDetails(name: String, age: Int, country: String) {       
    println("Name: $name, is Age: $age years old from $country")
}

fun average(vararg numbers: Int): Double {
    var sum = 0
    for (number in numbers) {
        sum += number
    }
    return sum.toDouble() / numbers.size
}

fun multiplySingleLine(a: Int, b: Int) = a * b