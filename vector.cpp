#include <bits/stdc++.h>
#include <vector>
using namespace std;

/*
* Vectors are like dynamic arrays with the ability to modify itself on inserting or deleting an element.

*push_back() function pushes(inserts) an element from the right and it also takes a parameter --> the value to be pushed.

* pop_back() function pops(deletes) the first(from right) element from vector.

* size() returns the size
*/

int main()
{
    vector<int> first;
    for(int i=1;i<6;i++) first.push_back(i);
    cout<<"The originsl vector is: ";
    for (int i = 0; i<first.size(); i++)
    cout << first[i] <<' ';
    
    cout<<"\nVector after push_back() operation: ";
    first.push_back(6);
    
    //vector becomes 1 2 3 4 5 6 
   for (int i = 0; i<first.size(); i++)
    cout << first[i] <<' ';
        
    cout<<"\nVector after pop_back() operation: ";
    first.pop_back();
 
    // Vector becomes 1, 2, 3, 4, 5
 
    for (int i = 0; i<first.size(); i++)
    cout << first[i] <<' ';
}     
