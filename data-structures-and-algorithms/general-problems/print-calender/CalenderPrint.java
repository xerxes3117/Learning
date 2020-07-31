import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.YearMonth;

public class CalenderPrint {
    public static void main(String[] args) {
        //INPUT
        LocalDate today = LocalDate.of(2020, 3, 23);

        //Get date, year and month of the date
        int year = today.getYear();
        int month = today.getMonthValue();
        int day = today.getDayOfMonth();

        //Get number of days in the given month
        YearMonth yearMonthObject = YearMonth.of(year, month);
        int daysInMonth = yearMonthObject.lengthOfMonth();

        //Get week of 1st day of month
        LocalDate startOfMonth = today.minusDays(day - 1);
        DayOfWeek weekDay = startOfMonth.getDayOfWeek();
        int value = weekDay.getValue();

        System.out.println("Mon Tue Wed Thu Fri Sat Sun");

        //Print initial spaces for first date
        for (var i = 1; i < value; i++) {
            System.out.print("    ");
        }

        //Print Dates
        for (var j = 1; j <= daysInMonth; j++) {
            String strBefore = j < 10 ? "  " : " ";
            String strAfter = j == day ? "*" : " ";

            //If day is Sunday print new line also
            if ((j + value -1) % 7 == 0) {
                System.out.print(strBefore + j + strAfter);
                System.out.print("\n");
            } else {
                System.out.print(strBefore + j + strAfter);
            }
        }
    }
}
