import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.YearMonth;

public class CalenderPrint {
    public static void main(String[] args) {
        LocalDate today = LocalDate.of(2020, 3, 23);
        int year = today.getYear();
        int month = today.getMonthValue();
        int day = today.getDayOfMonth();

        YearMonth yearMonthObject = YearMonth.of(year, month);
        int daysInMonth = yearMonthObject.lengthOfMonth();

        LocalDate startOfMonth = today.minusDays(day - 1);
        DayOfWeek weekDay = startOfMonth.getDayOfWeek();
        int value = weekDay.getValue();

        System.out.println("Mon Tue Wed Thu Fri Sat Sun");

        for (var i = 1; i < value; i++) {
            System.out.print("    ");
        }

        for (var j = 1; j <= daysInMonth; j++) {
            String strBefore = j < 10 ? "  " : " ";
            String strAfter = j == day ? "*" : " ";

            if ((j + value -1) % 7 == 0) {
                System.out.print(strBefore + j + strAfter);
                System.out.print("\n");
            } else {
                System.out.print(strBefore + j + strAfter);
            }
        }
    }
}
