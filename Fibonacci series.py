#program to display the first n terms of Fibonacci series.
import os

def fibo(n):
	if n==0 or n==1:
		return n
	return (fibo(n-1) + fibo(n-2))
	
n = int(input("Enter the value of n:\t" ))
for i in range(n):
	print(fibo(i) , end=" ")
print("\n\n\n\n")
os.system("pause")