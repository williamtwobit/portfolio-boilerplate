const state = {
  showLogo: false,
  showAbout: true,
  showWork: false,
  showContact: false
};

function showAbout(){
  state.showAbout = true;
  state.showLogo = false;
  state.showWork = false;
  state.showContact = false;
  render();
}

function showWork(){
  state.showAbout = false;
  state.showLogo = true;
  state.showWork = true;
  state.showContact = false;
  render();
}

function showContact(){
  state.showAbout = false;
  state.showLogo = true;
  state.showWork = false;
  state.showContact = true;
  render();
}

function render(){
  if(state.showLogo === true){
    $('.nav-name, .fill').removeClass('hide');

  }
  else if(state.showLogo === false){
    $('.nav-name, .fill').addClass('hide');

  }
  if(state.showAbout === true){
    $('.about').removeClass('hide');
    $('.about-link').addClass('selected');

  }
  else if(state.showAbout === false){
    $('.about').addClass('hide');
    $('.about-link').removeClass('selected');

  }
  if(state.showWork === true){
    $('.work').removeClass('hide');
    $('.work-link').addClass('selected');

  }
  else if(state.showWork === false){
    $('.work').addClass('hide');
    $('.work-link').removeClass('selected');

  }
  if(state.showContact === true){
    $('.contact').removeClass('hide');
    $('.contact-link').addClass('selected');

  }
  else if(state.showContact === false){
    $('.contact').addClass('hide');
    $('.contact-link').removeClass('selected');

  }
};


$(function(){
  $('a[href="#about"]').click(e=>{
    e.preventDefault;
    showAbout();
  });
  $('a[href="#work"]').click(e=>{
    e.preventDefault;
    showWork();
  });
  $('a[href="#contact"]').click(e=>{
    e.preventDefault;
    showContact();
  });
});