(function () {
	const implementors = Object.fromEntries([
		[
			"AirLibrary",
			[
				[
					'impl&lt;T, B&gt; Service&lt;Request&lt;B&gt;&gt; for <a class="struct" href="AirLibrary/Vine/Generated/air/air_service_server/struct.AirServiceServer.html" title="struct AirLibrary::Vine::Generated::air::air_service_server::AirServiceServer">AirServiceServer</a>&lt;T&gt;<div class="where">where\n    T: <a class="trait" href="AirLibrary/Vine/Generated/air/air_service_server/trait.AirService.html" title="trait AirLibrary::Vine::Generated::air::air_service_server::AirService">AirService</a>,\n    B: Body + <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> + \'static,\n    B::Error: <a class="trait" href="https://doc.rust-lang.org/nightly/core/convert/trait.Into.html" title="trait core::convert::Into">Into</a>&lt;StdError&gt; + <a class="trait" href="https://doc.rust-lang.org/nightly/core/marker/trait.Send.html" title="trait core::marker::Send">Send</a> + \'static,</div>',
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
//{"start":59,"fragment_lengths":[1010]}
