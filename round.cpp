/*round is used to round off the given digit which can be in float or double.
Header files used -> cmath, ctgmath
Parameters: x, value to be rounded
double round (double x);
float round (float x);
long double round (long double x);
double round (T x);  
*/

#include <cmath>
#include <iostream>
using namespace std;

int main()
{
    // initializing value
    double x = 12.5, y = 13.3, z = 14.8;
  
    // Displaying the nearest values
    // of x, y and z
    cout << "Nearest value of x :" << round(x) << endl;
    cout << "Nearest value of y :" << round(y) << endl;
    cout << "Nearest value of z :" << round(z) << endl;
  
    // For lround
    cout << "lround(-0.0) = " << lround(-0.0) << endl;
    cout << "lround(2.3) = " << lround(2.3) << endl;
    cout << "lround(2.5) = " << lround(2.5) << endl;
    cout << "lround(2.7) = " << lround(2.7) << endl;
    cout << "lround(-2.3) = " << lround(-2.3) << endl;
    cout << "lround(-2.5) = " << lround(-2.5) << endl;
    cout << "lround(-2.7) = " << lround(-2.7) << endl;
  
    // For llround
    cout << "llround(-0.01234) = " << llround(-0.01234) << endl;
    cout << "llround(2.3563) = " << llround(2.3563) << endl;
    cout << "llround(2.555) = " << llround(2.555) << endl;
    cout << "llround(2.7896) = " << llround(2.7896) << endl;
    cout << "llround(-2.323) = " << llround(-2.323) << endl;
    cout << "llround(-2.5258) = " << llround(-2.5258) << endl;
    cout << "llround(-2.71236) = " << llround(-2.71236) << endl;
  
    return 0;
}
