import os
def fact(k):
	if k==1:
		return 1
	return (k*fact(k-1))

k = int(input("Enter a number to find it's factorial: "))
if k==0:
	print(1)
else:
	print("The factorial of " +str(k)+ " is " +str(fact(k)))


os.system("pause")