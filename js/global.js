/*

November Template

http://www.templatemo.com/tm-473-november

*/

/* Google Maps
------------------------------------------------*/
var map = '';
var center;

function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(37.769725, -122.462154),
    scrollwheel: false,
    draggable:false
  };

  map = new google.maps.Map(document.getElementById('GoogleMap'),  mapOptions);

  google.maps.event.addDomListener(map, 'idle', function() {
    calculateCenter();
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(center);
  });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
  document.body.appendChild(script);
}

/* onScroll function
----------------------------------------*/
function onScroll(event) {
  var scrollPosition = $(document).scrollTop();
  $('nav li a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.length) { // 確保 refElement 存在
      if (
        refElement.position().top <= scrollPosition &&
        refElement.position().top + refElement.height() > scrollPosition
      ) {
        $('nav ul li').removeClass("active");
        currentLink.parent().addClass("active");
      } else {
        currentLink.parent().removeClass("active");
      }
    }
  });
}


/* HTML Document is loaded and DOM is ready.
--------------------------------------------*/
$(document).ready(function(){
  //slider
  var sudoSlider = $("#slider").sudoSlider({
   effect: "fade",
   pause: 3000,
   auto:true,
   continuous:true
 });

  //mobilemenu
  $('.mobile').click(function(){
    var $self = $(this);
    $('.menumobile').slideToggle( function(){
      $self.toggleClass('closed');
    });
  });

  //navigation script
  $('.Navigation ul li a').click(function(){
    $('.menumobile').removeAttr("style");
    $('#mobile_sec .mobile').removeClass("closed");
  });

  $('a.slicknav_btn').click(function(){
    $(".mobilemenu ul").css({"display":"block"});
  });

  //tab
  $(".tabLink").each(function(){
    $(this).click(function(){
      tabeId = $(this).attr('id');
      $(".tabLink").removeClass("activeLink");
      $(this).addClass("activeLink");
      $(".tabcontent").addClass("hide");
      $("#"+tabeId+"-1").removeClass("hide");
      return false;
    });
  });
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname)
    {
      var target = $(this.hash),
      headerHeight = $(".primary-header").height() + 5; // Get fixed header height
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length)
      {
        $('html,body').animate({
          scrollTop: target.offset().top + 2
        }, 600);
        return false;
      }
    }
  });	

  //Header Small
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 50; // 當滾動超過50px時
  
    if (scrollY > shrinkOn) {
      header.classList.add("smaller"); // 添加縮小樣式
    } else {
      header.classList.remove("smaller"); // 恢復原樣
    }
  });
  
  
  loadGoogleMap();

}); 

$(document).on("scroll", onScroll);

// Complete page is fully loaded, including all frames, objects and images
$(window).load(function() {
  // Remove preloader
  // https://ihatetomatoes.net/create-custom-preloading-screen/
  $('body').addClass('loaded');
});

// 滾動出現效果
window.addEventListener('scroll', function() {
  const timelineItems = document.querySelectorAll('.TimelineItem');
  timelineItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) { // 當元素接近視窗底部
          item.classList.add('show');
      }
  });
});

// 滾動出現效果
window.addEventListener('scroll', function() {
  const items = document.querySelectorAll('.ModuleCard, .SceneCard');
  items.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) { // 當元素接近視窗底部
          item.classList.add('show');
      }
  });
});

document.querySelectorAll('.ApplicationCard').forEach(card => {
  card.addEventListener('click', () => {
      const modal = document.getElementById('ModalOverlay');
      const title = card.getAttribute('data-modal-title');
      const content = card.getAttribute('data-modal-content');

      document.getElementById('ModalTitle').textContent = title;
      document.getElementById('ModalContent').textContent = content;

      modal.classList.add('ShowModal');
  });

  document.getElementById('ModalClose').addEventListener('click', () => {
    document.getElementById('ModalOverlay').classList.remove('ShowModal');
  });



});



document.addEventListener("DOMContentLoaded", function() {
  // 聚焦時增加搜尋框寬度
  document.querySelector('.search-input').addEventListener('focus', function() {
    this.style.width = '150px';
    this.style.transition = 'width 0.3s ease';
  });

  document.querySelector('.search-input').addEventListener('blur', function() {
    this.style.width = '100px';
    this.style.transition = 'width 0.3s ease';
  });
  // Bar Chart（條形圖）
  const barChartCanvas = document.getElementById('barChart');
  if (barChartCanvas) {
    const barCtx = barChartCanvas.getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['電堆技術', '系統整合', '系統組件', '測試裝置', '製程', '燃料組件'],
          datasets: [{
              label: '專利數量',
              data: [40, 53, 22, 11, 9, 51],
              backgroundColor: [
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(201, 203, 207, 0.6)'
              ],
              borderColor: 'rgba(0, 0, 0, 0.1)',
              borderWidth: 1,
              hoverBackgroundColor: [
                  'rgba(75, 192, 192, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(201, 203, 207, 1)'
              ]
          }]
        },
        options: {
          responsive: true,
          scales: {
              x: {
                  ticks: {
                      color: '#333',
                      font: { size: 14 },
                  }
              },
              y: {
                  beginAtZero: true,
                  grid: {
                      color: 'rgba(200, 200, 200, 0.2)' 
                  },
                  ticks: {
                      color: '#333',
                      font: { size: 14 },
                      stepSize: 10, 
                  }
              }
          },
          plugins: {
              datalabels: {
                  anchor: 'end',
                  align: 'top',
                  color: '#333',
                  font: {
                      size: 14,
                      weight: 'bold'
                  }
              }
          },

      }
      
    });
  } 
    // Pie Chart（圓餅圖）
    const pieChartCanvas = document.getElementById('pieChart');
    if (pieChartCanvas) {
      const pieCtx = pieChartCanvas.getContext('2d');
      const data = {
          labels: ['Taiwan', 'China', 'US', 'Japan', 'EP', 'Canada', 'Germany'],
          datasets: [{
              data: [77, 39, 30, 17, 17, 5, 1],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.8)',  // Taiwan
                  'rgba(54, 162, 235, 0.8)',  // China
                  'rgba(255, 206, 86, 0.8)',  // US
                  'rgba(75, 192, 192, 0.8)',  // Japan
                  'rgba(153, 102, 255, 0.8)', // EP
                  'rgba(255, 159, 64, 0.8)',  // Canada
                  'rgba(201, 203, 207, 0.8)'  // Germany
              ],
              borderWidth: 2,
              hoverOffset: 50
          }]
          
      };

      const drawLine = (chart) => {
          const meta = chart.getDatasetMeta(0);
          const ctx = chart.ctx;
          const dataset = chart.data.datasets[0];
          const total = dataset.data.reduce((sum, val) => sum + val, 0);

          meta.data.forEach((arc, index) => {
              const value = dataset.data[index];
              const percentage = ((value / total) * 100).toFixed(1) + '%';
              const label = chart.data.labels[index];
              const angle = (arc.startAngle + arc.endAngle) / 2;
              const outerRadius = arc.outerRadius + 10; 
              const xStart = Math.cos(angle) * outerRadius + arc.x;
              const yStart = Math.sin(angle) * outerRadius + arc.y;

              if ((value / total) * 100 < 5) {
                  // 外部標記
                  const xEnd = Math.cos(angle) * (outerRadius + 30) + arc.x;
                  const yEnd = Math.sin(angle) * (outerRadius + 30) + arc.y;
                  const textX = xEnd + (xEnd > arc.x ? 10 : -10);
                  const textAlign = xEnd > arc.x ? 'left' : 'right';

                  // 繪製線條
                  ctx.beginPath();
                  ctx.moveTo(xStart, yStart);
                  ctx.lineTo(xEnd, yEnd);
                  ctx.strokeStyle = dataset.backgroundColor[index];
                  ctx.stroke();

                  // 繪製文字（外側）
                  ctx.font = '12px Arial';
                  ctx.fillStyle = dataset.backgroundColor[index];
                  ctx.textAlign = textAlign;
                  ctx.fillText(`${label}: ${percentage}`, textX, yEnd);
              } else {
                  // 內部標記
                  const xMid = Math.cos(angle) * (arc.innerRadius + arc.outerRadius) / 2 + arc.x;
                  const yMid = Math.sin(angle) * (arc.innerRadius + arc.outerRadius) / 2 + arc.y;

                  ctx.font = '12px Arial';
                  ctx.fillStyle = '#FFFFFF';
                  ctx.textAlign = 'center';
                  ctx.fillText(`${label}: ${percentage}`, xMid, yMid);
              }
          });
      };

      new Chart(pieCtx, {
          type: 'pie',
          data: data,
          options: {
              plugins: {
                  legend: {
                      position: 'right',
                      labels: {
                          boxWidth: 50,
                          padding: 15,
                          color: '#333'
                      }
                  }
              },
              responsive: true,
              layout: {
                padding: 20
              },
          },
          plugins: [{
              id: 'externalLabels',
              afterDraw: (chart) => {
                  drawLine(chart);
              }
          }]
      });
    }
});





