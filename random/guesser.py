SECRET = "money"
found = False

print("=======================================")
print("=============WORD GUESSER==============")
print("=======================================\n")

print("Your first hint: ", " ".join("_" * len(SECRET)), "\n")

while not found:
    hint_arr = []
    guess = input("Enter your guess?    ")

    while len(guess) != len(SECRET):
        print(f"Word has {len(SECRET)} letters?")
        guess = input("Enter Guess? ")

    if guess.lower() == SECRET:
        found = True
        continue

    for idx, char in enumerate(guess):
        if char in SECRET:
            if char == SECRET[idx]:
                hint_arr.append(char.upper())
            else:
                hint_arr.append(char.lower())
        else:
            hint_arr.append("_")

    print("OOPS!!\nWrong Guess \n")
    print("Your hint: ", " ".join(hint_arr))

print("\n")
print("=======================================")
print("================CORRECT================")
print("=======================================\n")
