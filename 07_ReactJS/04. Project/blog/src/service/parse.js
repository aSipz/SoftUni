Parse.initialize('KO7uRRDLVlasFYYkMmW7DccDMIgDZWfambF6oCUe', 'x6o62QKFMi6tR0DvrvHDLwkwdJB9Uvu6O4tzLhST');
Parse.serverURL = "https://parseapi.back4app.com/"

async function run( ) {
    let user = await Parse.User.logIn();
    if (user) {
        debugger
        let rolesQuery = new Parse.Query(Parse.Role);
        console.log(rolesQuery);
        rolesQuery.equalTo('name', 'user');

        let role = await rolesQuery.first();
        console.log(role);

        if (role) {
            role.getUsers().add(user);
            role.save();
        }
    }
}