//Course constructor
function Course(title,instructor,image){
    this.title=title;
    this.instructor=instructor;
    this.image=image;
}

//UI constructor
function UI(){
    
}

UI.prototype.addCourseToList=function(course){
    const list=document.getElementById('course-list');

    var html=`
           <tr>
              <td><img src="img/${course.image}"/></td>
              <td>${course.title}</td>
              <td>${course.instructor}</td>
              <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
           </tr>
    `;
    list.innerHTML+=html;

}
UI.prototype.deleteCourse=function(elements){
    if(elements.classList.contains('delete')){
        elements.parentElement.parentElement.remove();
    };
}

UI.prototype.cleanControls=function(){
    const title=document.getElementById('title').value="";
    const instructor=document.getElementById('instructor').value="";
    const image=document.getElementById('image').value="";
}

UI.prototype.showAlert=function(message,className){
    var alert=`
     <div class="alert alert-${className}">
          ${message}
     </div>
    
    `;

    var row=document.querySelector('.row');
    //beforeBegin,afterBegin,beforeEnd,afterEnd
    row.insertAdjacentHTML('beforeBegin',alert);

    setTimeout(()=>{
        document.querySelector('.alert').remove();

    },3000);
}

const form=document.getElementById('new-course');

form.addEventListener('submit',function(e){

    const title=document.getElementById('title').value;
    const instructor=document.getElementById('instructor').value;
    const image=document.getElementById('image').value;

    //create course object
    const course=new Course(title,instructor,image);

    //create UI
    const ui=new UI();


    if(title==='' || instructor==='' || image===''){
        ui.showAlert('Lütfen formu tamamlayın','warning');
    }
    else{


        //add course to list
        ui.addCourseToList(course);

        //clear controls
        ui.cleanControls();

        ui.showAlert('Kurs Eklendi','success');

    }
    


    

    //show on the ui

    e.preventDefault();
});

document.getElementById('course-list').addEventListener('click',function(e){
    const ui=new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('Kurs Silindi','danger');

})
