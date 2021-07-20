package com.company;

import java.awt.*;
import java.text.NumberFormat;
import java.util.Date;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        while (true) {
            Scanner scanner = new Scanner(System.in);
            int num = scanner.nextInt();
            if(num % 5 == 0 || num % 3 == 0){
                System.out.println((num % 5 == 0 ? "Fizz" : "") + (num % 3 == 0 ? "Buzz" : ""));
            } else {
                System.out.println(num);
            }
        }
    }
}
