// Fetch the list of modules asynchronously
fetch('../module_list.json')
   // Then, convert the raw text to json
   .then(response => { return response.json() })
   // Then, take that list of modules...
   .then(modulelist => {
      // and for each folder name...
      modulelist.modules.forEach(foldername => {
         // Use a lambda function asynchronously...
         (async () => {
            // And wait for the file to be loaded and executed...
            await import('../modules/' + foldername + '/thread.js')
               // But if it errors out, display an error.
               .catch((error) => console.error('Loading a module failed with error:' + error))
         })()
      })
   })
