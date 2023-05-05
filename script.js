var container=document.createElement("div");
container.className="container-fluid";

var row = document.createElement("div");
row.className="row";
row.style.backgroundColor = '#f2f3f2';
row.id = "character-container"; 

container.append(row);
document.body.append(container);

var style = document.createElement('style');
style.innerHTML = `
  .card-img-top {
    object-fit: cover;
  }
`;
document.head.appendChild(style);


async function getcharater(){
    try {
        var charater = await fetch("https://thronesapi.com/api/v2/Characters");
        var data=await charater.json();
        for(var i=0;i<data.length;i++){
            let data1=data[i];
            row.innerHTML += `
            <div class="col-md-3">
              <div class="card border-info mb-3" style="width: 18rem; background-color:Black">
                <div class="card-header"  background-color:blue">
                </div>
                <h5  style="color:hsl(204, 100%, 75%);text-align:center">${data[i].fullName}</h5>
                <img src="${data[i].imageUrl}" class="card-img-top" alt="${data[i].image}"width="200" height="300">
                <div class="card-body">
                  <p  style="color:hsl(120, 2%, 90%)">First Name: ${data[i].firstName}</p>
                  <p  style="color:hsl(120, 2%, 90%)">Last Name: ${data[i].lastName}</p>
                  <p  style="color:hsl(120, 2%, 90%)">Title: ${data[i].title}</p>
                  <p  style="color:hsl(120, 2%, 90%)">Family: ${data[i].family}</p>
                  <p style="color:hsl(120, 2%, 90%)">Id: ${data[i].id}</p>
                </div>
              </div>
            </div>
          `;
        }
    } catch (error) {
        console.error(error);
    }
}

getcharater();
