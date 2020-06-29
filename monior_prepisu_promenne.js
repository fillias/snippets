	// MONITORING POSTSCRIBE
	(function() {
		var localPostscribe;
		Object.defineProperty(window, 'postscribe', {
			get() {
				console.log('GET POSTSCRIBE');
				return localPostscribe;
			},
			set(newValue) {
				if(localPostscribe) {
					console.log('POSTSCRIBE WILL BE OVERRIDEN');
				}
				console.log('POSTSCRIBE definition', newValue);
				localPostscribe = newValue;
			},
			enumerable: true,
			configurable: true
		});
	})();