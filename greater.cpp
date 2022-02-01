#include<algorithm>
#include<functional>
#include<iostream>
using namespace std;

int main()
{
	int arr[]={2,6,1,3,8,3};
	sort(arr, arr+6);
	for(int i=0;i<6;i++) cout<<arr[i]<<' ';
	cout<<endl;
	sort(arr,arr+6,greater<int>());
	for(int i=0;i<6;i++) cout<<arr[i]<<' ';
	cout<<endl;
}
