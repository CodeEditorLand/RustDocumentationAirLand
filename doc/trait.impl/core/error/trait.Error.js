(function () {
	const implementors = Object.fromEntries([
		[
			"AirLibrary",
			[
				[
					'impl <a class="trait" href="https://doc.rust-lang.org/nightly/core/error/trait.Error.html" title="trait core::error::Error">Error</a> for <a class="enum" href="AirLibrary/Vine/Error/enum.VineError.html" title="enum AirLibrary::Vine::Error::VineError">VineError</a>',
					0,
				],
				[
					'impl <a class="trait" href="https://doc.rust-lang.org/nightly/core/error/trait.Error.html" title="trait core::error::Error">Error</a> for <a class="enum" href="AirLibrary/enum.AirError.html" title="enum AirLibrary::AirError">AirError</a>',
					0,
				],
			],
		],
	]);
	if (window.register_implementors) {
		window.register_implementors(implementors);
	} else {
		window.pending_implementors = implementors;
	}
})();
//{"start":59,"fragment_lengths":[555]}
