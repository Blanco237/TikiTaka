#Word Guess Game 

secret_word = "money"
number_of_letters = len(secret_word) 

print("Welcome to my guessing game! \n")
print("Your hint is: _ _ _ _ _ \n")
guess = input("What is your guess? ")

guess_letter_count = len(guess) 

if guess.lower() == secret_word :
    print("Congratulations! You guessed it. \n")
    
else: 
    while guess.lower() != secret_word :
        print("Your guess was not correct. \n")
        guess = input("What is your guess? ") 
    
print("Congratulations! You guessed it. \n") 
    #while guess.lower() != secret_word : 
        #if guess_letter_count != number_of_letters :
            #print("Sorry, the guess must have the same number of letters as the secret word. \n") 
            #guess = input("What is your guess? ") 
        #else: 
            #guess_letter_count == number_of_letters 
        
        #for letter in secret_word :
            #if guess.lower() == secret_word.lower() and guess[0,4].lower == secret_word[0,4].lower() :
                #print(f"Your hint is: {letter.upper} _ _ _ _ \n")
                #guess = input("What is your guess? ") 
            #else: 
                #print(f"Your hint is: {letter.lower} ")
            
    #print()

