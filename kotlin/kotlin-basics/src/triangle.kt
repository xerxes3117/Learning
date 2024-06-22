import kotlin.math.sqrt

class Triangle(
    private val a: Double,
    private val b: Double,
    private val c: Double
    ) {
    init {
        println("Triangle created with sides a = $a, b = $b & c = $c")
    }

    fun calculateArea(){
        val den = (a + b + c)/2.0;
        val area = sqrt(den * (den - a) * (den - b) * (den - c))
        println("Triangle area is: $area")
    }
    fun calculatePerimeter(){
        println("Triangle perimeter is: ${a + b + c}")
    }
}