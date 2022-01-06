$(function() {
	var data = [
	{ 
	  action: 'type',
	  strings: ["npm install -g haluka-cli"],
	  output: '<span class="gray">+haluka-cli@0.0.2 installed</span><br>&nbsp;',
	  postDelay: 500
	},
	{ 
	  action: 'type',
	  strings: ["haluka new myproject"],
	  output: '<span class="gray">New Haluka project created into \'myproject\'.</span><br>&nbsp;',
	  postDelay: 500
	},
	{ 
	  action: 'type',
	  strings: ['cd myproject'],
	  output: '&nbsp;',
	  postDelay: 250
	},
	{ 
	  action: 'type',
	  strings: ["npm install"],
	  output: '<span class="gray">+Dependencies installed</span><br>&nbsp;',
	  postDelay: 500
	},
	{ 
		action: 'type',
		strings: ["haluka serve"],
		output: '<span class="gray">Your application is up & live at http://localhost:3000</span><br>&nbsp;',
		postDelay: 1000
	},
	{ 
		action: 'type',
		strings: ["piece of cake", ''],
		postDelay: 1000
	}
	
  ];
	runScripts(data, 0);
  });
  
  function runScripts(data, pos) {
	  var prompt = $('.prompt'),
		  script = data[pos];
	  if(script.clear === true) {
		$('.history').html(''); 
	  }
	  switch(script.action) {
		  case 'type':
			// cleanup for next execution
			prompt.removeData();
			$('.typed-cursor').text('');
			prompt.typed({
			  strings: script.strings,
			  typeSpeed: 30,
			  callback: function() {
				var history = $('.history').html();
				history = history ? [history] : [];
				history.push('$ ' + prompt.text());
				if(script.output) {
				  history.push(script.output);
				  prompt.html('');
				  $('.history').html(history.join('<br>'));
				}
				// scroll to bottom of screen
				$('section.terminal').scrollTop($('section.terminal').height());
				// Run next script
				pos++;
				if(pos < data.length) {
				  setTimeout(function() {
					runScripts(data, pos);
				  }, script.postDelay || 1000);
				}
			  }
			});
			break;
		  case 'view':
  
			break;
	  }
  }
  