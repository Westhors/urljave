var markName = document.getElementById('siteNameInput');
var siteUrl = document.getElementById('siteUrlInput');


if(localStorage.getItem('oursite')==null)
{
    siteList=[];
}

else 
{
    siteList=JSON.parse(localStorage.getItem('oursite'))
    displaysites ()

}

var siteList = [];

function test()
{
    
    var sitese = 
{
    name:markName.value,
    url:siteUrl.value,
};

siteList.push(sitese)
localStorage.setItem('oursite',JSON.stringify(siteList))
displaysites ()

}


function displaysites ()
{
    var cartona = '';
     
    for (var i =0;i<siteList.length;i++)
    {
        cartona+=
        `
        <div class='col-md-12 my-3 one p-4'>
        <div class='ml-3 p-2'>
        ${siteList[i].name}
        
        </div>
        
        <div class='aliier'>

        <a href="${siteList[i].url}" class="btn btn-info">visite</a>
        <button onclick='deletesite (${i})' class='btn btn-danger '>delete</button>

        </div>  

        </div>
        </div>
        `
       // ${siteList[i].url};
    }
    document.getElementById('bookmarkList').innerHTML=cartona;

}

function deletesite (index)
{
    siteList.splice(index,1);
localStorage.setItem('oursite',JSON.stringify(siteList))
displaysites ()

}
