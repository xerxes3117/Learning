fun main(){
    printReverse()
}

fun printReverse(){
    val list = mutableListOf<Int>()
    println("Enter 5 numbers:")
    for(i in 1..5){
        list.add(readlnOrNull()?.toInt() ?: 0)
    }
    for(i in list.reversed()){
        println(i)
    }
}