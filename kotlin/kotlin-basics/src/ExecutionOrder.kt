class ExClass(val primParam: String) {
    val classVar = "Class Variable Initialized".also { println(it) }

    init {
        println("Init Block Executed")
    }

    constructor(primParam: String, secParam1: String) : this(primParam) {
        println("Secondary Constructor 1 Executed")
    }

    constructor(primParam: String, secParam1: String, secParam2: String) : this(primParam, secParam1) {
        println("Secondary Constructor 2 Executed")
    }
}

fun main() {
    println("Creating object with primary constructor:")
    val obj1 = ExClass("Primary Param")

    println("\nCreating object with first secondary constructor:")
    val obj2 = ExClass("Primary Param", "Secondary Param 1")

    println("\nCreating object with second secondary constructor:")
    val obj3 = ExClass("Primary Param", "Secondary Param 1", "Secondary Param 2")
}