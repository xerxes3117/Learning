import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

data class Person(var name: String)

fun main() = runBlocking {
    var person = Person("John")

    launch {
        delay(1000)
        person.name = "Jane"  // Change 'person' property
    }

    launch {
        delay(2000)
        person = Person("Mary")  // Change 'person' object
    }

    launch {
        delay(3000)
        person.let { originalPerson ->
            runBlocking {
                println("Approach 1: $originalPerson")  // Prints new person
            }
        }
    }

    launch {
        person.let { originalPerson ->
            runBlocking {
                delay(3000)
                println("Approach 2: $originalPerson")  // Prints original person but it's name is changed
            }
        }
    }

    person.let { originalPerson ->
        runBlocking {
            delay(500)
            println("Approach 3: $originalPerson")  // Prints original person but it's name is changed
        }
    }
}