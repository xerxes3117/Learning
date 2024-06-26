fun main(){
    println("Enter a number:")
    val num1 = readlnOrNull()?.toInt() ?: 0
    println("Enter second number:")
    val num2 = readlnOrNull()?.toInt() ?: 0
//    printDescending(num1)
    printToPower(num1, num2)
}

fun printDescending(num: Int): Unit {
    for (i in num downTo 0) {
        println(i)
    }
}

fun printToPower(num1: Int, num2: Int): Unit{
    var res = 1;
    for(i in num2 downTo 1){
        res *= num1;
    }
    println(res)
}



