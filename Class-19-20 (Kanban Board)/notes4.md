


**Agenda of this Lecture:**

- Understanding Local Storage
- Implementing Local Storage in the Project on appropriate parts
- Project wrap up with any left overs or finishing touches
- Deploying the Project with Github Pages




1. Local Storage is a web storage mechanism that allows websites and applications to store and access data right in the user's browser with no expiration date. 

2. This means the data stored in Local Storage persists even after the browser window is closed, making it a convenient place to store data that needs to be accessed across sessions. 


step-by-step explanation of Local Storage:

### 1. Understanding Web Storage

1. Before diving into Local Storage specifically, it’s important to understand the concept of web storage. Web storage provides web applications with the ability to store data locally within the user's browser. 

2. It offers a more secure and faster way of handling data than cookies, as the data is not sent with every server request. 

3. There are two main types of web storage:

- **Local Storage**: Stores data with no expiration date.
- **Session Storage**: Stores data for one session and is cleared when the browser tab is closed.

Today's Focus will be on Local Storage

### Local Storage Basics

1. Local Storage is part of the Web Storage API, which provides a simple key-value store. 

2. Each piece of data stored is a string, and it is associated with a unique key. You can think of it as a dictionary or a map, where each key points to a specific piece of data.

### How to Use Local Storage

Using Local Storage involves three basic operations: setting items, getting items, and removing items.

#### Setting Items

To store data in Local Storage, you use the `setItem` method. 

This method requires two arguments: the key and the value. Both the key and the value must be strings.

```javascript
localStorage.setItem('key', 'value');
```

If you need to store objects or arrays, you can serialize them to a string using `JSON.stringify()`.

```javascript
localStorage.setItem('user', JSON.stringify({ name: 'Alice', age: 30 }));
```

#### Getting Items

To retrieve data from Local Storage, use the `getItem` method with the key as the argument.

```javascript
const value = localStorage.getItem('key');
```

For objects or arrays, you can convert them back to their original form using `JSON.parse()`.

```javascript
const user = JSON.parse(localStorage.getItem('user'));
```

#### Removing Items

To remove a specific item from Local Storage, use the `removeItem` method with the key.

```javascript
localStorage.removeItem('key');
```

To clear all data stored in Local Storage, use the `clear` method.

```javascript
localStorage.clear();
```

### 4. Limitations and Considerations

1. **Storage Limits**: Local Storage is limited to about 5-10 MB per domain. This limit can vary between different browsers.

2. **Synchronous API**: Local Storage operations are synchronous, which means they can block the main thread and potentially affect the performance of your application.

3. **Security**: While Local Storage data is not transmitted to the server with every request like cookies, it’s still accessible through JavaScript. This means it's vulnerable to cross-site scripting (XSS) attacks if your site is susceptible to such vulnerabilities.

4. **No Data Expiration**: Data in Local Storage doesn’t expire. You need to manually manage when to clear it.




Now, let's see how we are gonna implement local storage

**[Ask the leaners]**  
In which scenarios will the requirement for local storage arise?

Let's review  all our functionalities:

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/633/original/4.png?1695232834)


a. Creating a ticket involves storing them within local storage.

b. Updating a ticket, whether altering its color or task, entails updating these modified values in local storage.

c. Deleting a ticket results in its removal from local storage.


Whenever a ticket creation occurs, we have the option to store it in local storage using the "setItem" method. This involves providing the name of the array as a parameter. Here, during the code insertion within the createTicket method, we will employ the setItem function of localStorage:

#### Pseudocode
```javascript

function createTicket(ticketColor, ticketTask, ticketId) {
    if (!ticketId) {
        ticketArr.push({ ticketColor, ticketTask, ticketId: shortid() });
        localStorage.setItem('tickets', JSON.stringify(ticketArr));
    }
}

```

It's important to note that local storage accommodates data in string format. Thus, any data you intend to store should be converted into string form before insertion.


> Note to instructor - Test to determine whether the local storage has been successfully established or not.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/634/original/5.png?1695232854)

After refreshing the page, you'll notice that the data resides within local storage, yet the paradox emerges – despite setting the data, we encounter a loss of the data itself. The situation unfolds as we've successfully stored the data, yet the process of retrieving the values is not yet implemented

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/635/original/6.png?1695232878)


We employ the stringify method to establish the data, while the reverse, JSON.parse, allows us to retrieve the data back in object or array format

As we initiate the application, our first step is to retrieve all the tickets stored within local storage. 

If we come across any items designated as "tickets," our subsequent approach revolves around displaying or generating these tickets accordingly. 

For each of these identified tickets, the createTicket method will be invoked.

#### Pseudocode
```javascript=

// local storage

if (localStorage.getItem('tickets')) {
    ticketsArr = JSON.parse(localStorage.getItem('tickets'));
    ticketsArr.forEach(function(ticket) {
        createTicket(ticket.ticketColor, ticket.ticketTask, ticket.ticketId);
    });
}

```

> Note to instructor - Test this by refreshing the page again; you'll observe that nothing is removed.




> Note to instructor - Feel free to address any questions that students might have. 


Initially, let's construct a function that facilitates the retrieval of the ticket's index using its corresponding ID. The ID will help in identifying the ticket that requires updating.

#### Pseudocode
```javascript

function getTicketIdx(id) {
    let ticketIdx = ticketArr.findIndex(function(ticketObj) {
        return ticketObj.ticketId === id;
    });
    return ticketIdx;
}

```

Within the handleLock function, whenever a lock is unlocked through a click event, we will retrieve the id of the ticjet so we can make changes


#### Pseudocode
```javascript
function handleLock(ticket) {
    let ticketLockElem = ticket.querySelector('.ticket-lock');
    let ticketLockIcon = ticketLockElem.children[0];
    let ticketTaskArea = ticket.querySelector('.task-area');
    
    ticketLockIcon.addEventListener('click', function() {
        let ticketIdx = getTicketIdx(id);
        // Other code
        
        // Updated task
        ticketsArr[ticketIdx].ticketTask = ticketTaskArea.innerText;
        localStorage.setItem('tickets', JSON.stringify(ticketsArr));
    });
}

```

Henceforth, it will be retained with an updated task.


> Note to instructor -  Verify the modifications by updating the task through unlocking and locking. Subsequently, update the task, refresh the page, and inspect the local storage to confirm whether the task has indeed been updated.

> Note to instructor - Wait for 5-10 minutes for the break.

> Note to instructor - Feel free to address any questions that students might have. 




Now, let's proceed to explore the color feature.


#### Pseudocode
```javascript
function handleColor(ticket) {
    let ticketColorBand = ticket.querySelector('.ticket-color');
    
    ticketColorBand.addEventListener('click', function() {
        // getting index
        let ticketIdx = getTicketIdx(id);
        let currentColor = ticketColorBand.classList[1];
        
        let currentColorIdx = colors.findIndex(function(color) {
            return currentColor === color;
        });
        
        currentColorIdx++;
        
        let newTicketColorIdx = currentColorIdx % colors.length;
        let newTicketColor = colors[newTicketColorIdx];
        
        ticketColorBand.classList.remove(currentColor);
        ticketColorBand.classList.add(newTicketColor);
        
        // Updated task
        ticketsArr[ticketIdx].ticketColor = newTicketColor;
        localStorage.setItem('tickets', JSON.stringify(ticketsArr));
    });
}

```

Over here as well we are performing the exact same thing , getting the id of the ticket when the color has chnaged and setting that color inside local storage of the ticket 

> Note to instructor -  Test the changes after this step



Now, let's evaluate the final feature, which involves deleting data from local storage.


#### Pseudocode
```javascript
function handleRemoval(ticket) {
    ticket.addEventListener('click', function() {
        if (!removeTaskFlag) return;
        
        let idx = getTicketIdx(id);
        ticket.remove(); // UI removal
        
        let deletedElement = ticketsArr.splice(idx, 1);
        localStorage.setItem('tickets', JSON.stringify(ticketsArr));
    });
}

```

To delete the whole ticket from the local storage we will add these following steps to our `handleRemoval` Function

6. **Updating the Array**: The code  proceeds to remove the ticket from the `ticketsArr` array, which  to hold all tickets. This is done using the `splice` method, where `idx` is the index of the element to remove, and `1` indicates the number of elements to remove starting from that index. The method returns an array of the removed elements, in this case, a single element array. which is the ticket

   ```javascript
   let deletedElement = ticketsArr.splice(idx, 1);
   ```

7. **Updating Local Storage**: Finally, the updated `ticketsArr` (with the ticket removed) is stringified using `JSON.stringify` and saved back to the browser's local storage under the key `'tickets'`. This step ensures that the change persists across page reloads, maintaining the application's state.

   ```javascript
   localStorage.setItem('tickets', JSON.stringify(ticketsArr));
   ```

> Note to instructor -  Test the changes after this step 


> Note to instructor -  Now, reconfirm all the operations once more: Creating tickets, performing updates, removals, and repeated filtering by clicking the same color button multiple times – ensuring the prevention of duplicated ticket creation.

> Note to instructor - Feel free to address any queries that students might have.

The Project Here stands Finished 


After Finshing the project , Help learners to deployt their project on Github Pages.

Simplified steps to deploy a JavaScript, CSS, and HTML project on GitHub Pages:

1. **Create a GitHub Repository**: Go to GitHub, create a new repository for your project.

2. **Prepare Your Project**: Make sure your project has an `index.html` at the root.

3. **Push Your Project to GitHub**:
   - Initialize your project folder as a Git repository (if not already) using `git init`.
   - Add the GitHub repository as a remote with `git remote add origin https://github.com/<username>/<repository-name>.git`.
   - Add your project files to the staging area with `git add .`.
   - Commit the changes with `git commit -m "Initial commit"`.
   - Push the project to GitHub with `git push -u origin master` (use `main` instead of `master` if your default branch is `main`).

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Navigate to "Settings" > "Pages".
   - Select the branch you want to deploy from, usually `master` or `main`.
   - Click "Save".

Your project is now live, and you can access it via `https://<username>.github.io/<repository-name>/`.
