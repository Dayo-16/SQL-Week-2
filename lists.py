languages = ['Python', 'Swift', 'C++']
print (languages[-1])


my_list = ['p', 'r','o', 'g', 'r', 'a', 'm', 'i']
print(my_list[2:5])
print(my_list[5:])
print(my_list[:])

numbers =[21, 34, 54, 12]
print("Before Append:", numbers)
numbers.append(32)
print("After Append:", numbers)

prime_numbers = [2, 3, 5]
print("List1:", prime_numbers)
even_numbers = [4, 6, 8]
print("List2:", even_numbers)
prime_numbers.extend(even_numbers)
print("List after append:", prime_numbers)

languages = ['Python', 'Swift', 'C++']
languages[2] = 'C'
print (languages)


languages = ['Python', 'Swift', 'C++', 'Java', 'JavaScript', 'Rust', 'R']
del languages[1]
print(languages)
del languages[-1]
print(languages)

del languages[0:2]
print(languages)