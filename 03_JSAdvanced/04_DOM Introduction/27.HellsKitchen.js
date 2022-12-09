function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      console.log(input);
      let bestRestaurant = findBestRestaurant(input);
      console.log(bestRestaurant);
      document.querySelector('#bestRestaurant p').textContent = getOutputRestaurant(bestRestaurant);
      document.querySelector('#workers p').textContent = getOutputWorkers(bestRestaurant);


      function getOutputRestaurant(object) {
         return `Name: ${object.name} Average Salary: ${object.averageSalary.toFixed(2)} Best Salary: ${object.maxSalary.toFixed(2)}`
      }

      function getOutputWorkers(object) {
         let workersArray = Object.entries(object.workers).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
         let msg = [];
         for (const [name, salary] of workersArray) {
            msg.push(`Name: ${name} With Salary: ${salary}`);
         }
         return msg.join(' ');
      }

      function findBestRestaurant(input) {
         let pattern = /(?: - )|(?:, )/g;
         let restaurantsArray = input.reduce((acc, current) => {
            let [name, ...workersArray] = current.split(pattern);
            workers = workersArray.reduce((obj, el) => {
               let [name, salary] = el.split(' ');
               return Object.assign(obj, { [name]: Number(salary) })
            }, {});

            let restaurantInList = acc.find(obj => obj.name == name);
            if (restaurantInList) {
               Object.assign(restaurantInList.workers, workers);
            } else {
               acc.push({ name, workers });
            }
            return acc;
         }, []);
         restaurantsArray.forEach((element, index) => {
            element.inputOrder = index;
            let salaryArray = Object.values(element.workers);
            element.maxSalary = Math.max(...salaryArray);
            element.averageSalary = salaryArray.reduce((acc, salary) => acc + salary, 0) / salaryArray.length;
         });
         restaurantsArray.sort((a, b) => b.averageSalary - a.averageSalary || a.inputOrder - b.inputOrder);
         return restaurantsArray[0];
      }
   }
}