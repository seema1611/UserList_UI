var users=[
    {
        name: "Seema Rajpure",
        email:"seema16@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Ryan Larson",
        email:"ryanlarson11@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"1d ago",
        permisiion:"Valid"
    },{
        name: "Seema Rajpure",
        email:"seema16@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"3d ago",
        permisiion:"Invalid"
    },{
        name: "Aju Sanas",
        email:"ajusanas11@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Bhakti Arde",
        email:"bhaktiarde29@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"3d ago",
        permisiion:"Valid"
    },{
        name: "Seema Rajpure",
        email:"seema16@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"1d ago",
        permisiion:"Valid"
    },{
        name: "Aishu Kaware",
        email:"aishu14@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"-",
        permisiion:"Invalid"
    },{
        name: "Aju Sanas",
        email:"ajusanas11@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permisiion:"Valid"
    }, {
        name: "Seema Rajpure",
        email:"seema16@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Ryan Larson",
        email:"ryanlarson11@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"3d ago",
        permisiion:"Valid"
    },{
        name: "Seema Rajpure",
        email:"seema16@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"-",
        permisiion:"Valid"
    },{
        name: "Aju Sanas",
        email:"ajusanas11@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Bhakti Arde",
        email:"bhaktiarde29@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Seema Rajpure",
        email:"seema16@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"3d ago",
        permisiion:"Invalid"
    },{
        name: "Aishu Kaware",
        email:"aishu14@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"-",
        permisiion:"Valid"
    },{
        name: "Aju Sanas",
        email:"ajusanas11@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"3d ago",
        permisiion:"Valid"
    },{
        name: "Aju Sanas",
        email:"ajusanas11@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"2d ago",
        permisiion:"Invalid"
    }, {
        name: "Seema Rajpure",
        email:"seema16@gmail.com",
        status:"Inactive",
        role:"User",
        lastLogin:"-",
        permisiion:"Valid"
    },{
        name: "Ryan Larson",
        email:"ryanlarson11@gmail.com",
        status:"Active",
        role:"Administrator",
        lastLogin:"2d ago",
        permisiion:"Valid"
    },{
        name: "Seema Rajpure",
        email:"seema16@gmail.com",
        status:"Active",
        role:"User",
        lastLogin:"2d ago",
        permisiion:"Valid"
    }]
    
    function loadUsers(users){
        var userList=""
        for(var i=0;i<users.length;i++){
            userList+="<div class=\"user-list-item\">\n"+
            "<div class=\"name list-column\"><i class=\"fa fa-user-circle\" style=\"color:#555555; margin-right: 10%; font-size:25px;\"></i>"+users[i].name+"</div>\n"+
            "<div class=\"email list-column\">"+users[i].email+"</div>\n";
            console.log(users[i].status);
            if(users[i].status.match("Active")){
                userList+="<div class=\"status list-column\"><div class=\"status-active\">"+users[i].status+"</div> </div>\n";
            }else{
                userList+="<div class=\"status list-column\"><div class=\"status-inactive\">"+users[i].status+"</div> </div>\n";
            }
            userList+="<div class=\"role list-column\">"+users[i].role+"</div>\n"+
            "<div class=\"last-login list-column\">"+users[i].lastLogin+"</div>\n";
    
            console.log(users[i].permisiion);
            if(users[i].permisiion.match("Valid")){
                userList+="<div class=\"permission list-column\"><div class=\"permission-valid\">"+users[i].permisiion+"</div> </div>\n";
            }else{
                userList+="<div class=\"permission list-column\"><div class=\"permission-invalid\">"+users[i].permisiion+"</div> </div>\n";
            }
            userList+="<h7 class=\"option list-column\">...</h7>\n"+
            "</div>";
        }
        window.document.getElementById("user-list-items").innerHTML+=userList;
        var userCount= window.document.getElementsByClassName("user-list-item").length;
        window.document.getElementById("user-count").innerHTML = "Users("+userCount+")";
    }
    
    
    loadUsers(users);
    var userToggle=true;
    function showSubMenu(value){
        var subMenuId="sub-menu-"+value;
        var subMenu=document.getElementById(subMenuId);
        console.log(subMenu);
        if(userToggle){
            subMenu.style.display="block";
            document.getElementById("authentication").classList.add("menu-button-highlight");
            userToggle=false;
        }else{
            subMenu.style.display="none";
            document.getElementById("authentication").classList.remove("menu-button-highlight");
            userToggle=true;
        }
    }
    
    
    var userListToggle=true;
    function showUsers(){
        var userList=document.getElementById("user-list");
        console.log(userListToggle);
        console.log(userList);
        if(userListToggle){
            userList.style.display="block";
            document.getElementById("users-sub-button").classList.add("menu-button-extra-highlight");
            userListToggle=false;
        }else{
            userList.style.display="none";
            document.getElementById("users-sub-button").classList.remove("menu-button-extra-highlight");
            userListToggle=true;
        }
    }