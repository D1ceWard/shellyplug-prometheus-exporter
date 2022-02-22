crystal_doc_search_index_callback({"repository_name":"shellyplug-prometheus-exporter","body":"# shellyplug-prometheus-exporter (v0.1.1)\n![GitHub Workflow Status (event)](https://github.com/D1ceWard/shellyplug-prometheus-exporter/actions/workflows/main.yml/badge.svg?branch=master)\n[![GitHub issues](https://img.shields.io/github/issues/D1ceWard/shellyplug-prometheus-exporter)](https://github.com/D1ceWard/shellyplug-prometheus-exporter/issues)\n[![GitHub license](https://img.shields.io/github/license/D1ceWard/shellyplug-prometheus-exporter)](https://github.com/D1ceWard/shellyplug-prometheus-exporter/blob/master/LICENSE)\n\nPrometheus Exporter for Shelly plugs\n\n:rocket: Suggestions for new improvements are welcome in the issue tracker.\n\n## Usage\n\nRun with docker-compose file :\n```\n---\nversion: \"3\"\n\nservices:\n  plug_exporter:\n    image: d1ceward/shellyplug-prometheus-exporter\n    restart: unless-stopped\n    ports:\n      - \"80:8080\"\n    environment:\n      - EXPORTER_PORT=80\n      - SHELLYPLUG_HOSTNAME=\"shelly-plug-hostname-or-ip\"\n      - SHELLYPLUG_PORT=80\n      - SHELLYPLUG_HTTP_USERNAME=\"username-for-http-auth\"\n      - SHELLYPLUG_HTTP_PASSWORD=\"password-for-http-auth\"\n```\n\nDocumentation available here : https://d1ceward.github.io/shellyplug-prometheus-exporter/\n\n## Contributing\n\nBug reports and pull requests are welcome on GitHub at https://github.com/D1ceWard/shellyplug-prometheus-exporter. By contributing you agree to abide by the Code of Merit.\n\n1. Fork it (<https://github.com/D1ceWard/shellyplug-prometheus-exporter/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [D1ceWard](https://github.com/D1ceWard) - creator and maintainer\n","program":{"html_id":"shellyplug-prometheus-exporter/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"shellyplug-prometheus-exporter","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"shellyplug-prometheus-exporter/ShellyplugExporter","path":"ShellyplugExporter.html","kind":"module","full_name":"ShellyplugExporter","name":"ShellyplugExporter","abstract":false,"locations":[{"filename":"src/error.cr","line_number":1,"url":"https://github.com/D1ceWard/shellyplug-prometheus-exporter/blob/e36b380387887f0cb8c93412863b67caf94faa7c/src/error.cr#L1"},{"filename":"src/shellyplug_exporter/plug.cr","line_number":1,"url":"https://github.com/D1ceWard/shellyplug-prometheus-exporter/blob/e36b380387887f0cb8c93412863b67caf94faa7c/src/shellyplug_exporter/plug.cr#L1"},{"filename":"src/shellyplug_exporter/server.cr","line_number":1,"url":"https://github.com/D1ceWard/shellyplug-prometheus-exporter/blob/e36b380387887f0cb8c93412863b67caf94faa7c/src/shellyplug_exporter/server.cr#L1"},{"filename":"src/version.cr","line_number":1,"url":"https://github.com/D1ceWard/shellyplug-prometheus-exporter/blob/e36b380387887f0cb8c93412863b67caf94faa7c/src/version.cr#L1"}],"repository_name":"shellyplug-prometheus-exporter","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.1.1\""}],"types":[{"html_id":"shellyplug-prometheus-exporter/ShellyplugExporter/InvalidCredentials","path":"ShellyplugExporter/InvalidCredentials.html","kind":"class","full_name":"ShellyplugExporter::InvalidCredentials","name":"InvalidCredentials","abstract":false,"superclass":{"html_id":"shellyplug-prometheus-exporter/Exception","kind":"class","full_name":"Exception","name":"Exception"},"ancestors":[{"html_id":"shellyplug-prometheus-exporter/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"shellyplug-prometheus-exporter/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"shellyplug-prometheus-exporter/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/error.cr","line_number":3,"url":"https://github.com/D1ceWard/shellyplug-prometheus-exporter/blob/e36b380387887f0cb8c93412863b67caf94faa7c/src/error.cr#L3"}],"repository_name":"shellyplug-prometheus-exporter","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"shellyplug-prometheus-exporter/ShellyplugExporter","kind":"module","full_name":"ShellyplugExporter","name":"ShellyplugExporter"}},{"html_id":"shellyplug-prometheus-exporter/ShellyplugExporter/MissingHostname","path":"ShellyplugExporter/MissingHostname.html","kind":"class","full_name":"ShellyplugExporter::MissingHostname","name":"MissingHostname","abstract":false,"superclass":{"html_id":"shellyplug-prometheus-exporter/Exception","kind":"class","full_name":"Exception","name":"Exception"},"ancestors":[{"html_id":"shellyplug-prometheus-exporter/Exception","kind":"class","full_name":"Exception","name":"Exception"},{"html_id":"shellyplug-prometheus-exporter/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"shellyplug-prometheus-exporter/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/error.cr","line_number":2,"url":"https://github.com/D1ceWard/shellyplug-prometheus-exporter/blob/e36b380387887f0cb8c93412863b67caf94faa7c/src/error.cr#L2"}],"repository_name":"shellyplug-prometheus-exporter","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"shellyplug-prometheus-exporter/ShellyplugExporter","kind":"module","full_name":"ShellyplugExporter","name":"ShellyplugExporter"}},{"html_id":"shellyplug-prometheus-exporter/ShellyplugExporter/Plug","path":"ShellyplugExporter/Plug.html","kind":"class","full_name":"ShellyplugExporter::Plug","name":"Plug","abstract":false,"superclass":{"html_id":"shellyplug-prometheus-exporter/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"shellyplug-prometheus-exporter/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"shellyplug-prometheus-exporter/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/shellyplug_exporter/plug.cr","line_number":2,"url":"https://github.com/D1ceWard/shellyplug-prometheus-exporter/blob/e36b380387887f0cb8c93412863b67caf94faa7c/src/shellyplug_exporter/plug.cr#L2"}],"repository_name":"shellyplug-prometheus-exporter","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"shellyplug-prometheus-exporter/ShellyplugExporter","kind":"module","full_name":"ShellyplugExporter","name":"ShellyplugExporter"},"constructors":[{"html_id":"new-class-method","name":"new","doc":"Store url/login informations for Shelly plug API calls","summary":"<p>Store url/login informations for Shelly plug API calls</p>","abstract":false,"location":{"filename":"src/shellyplug_exporter/plug.cr","line_number":4,"url":"https://github.com/D1ceWard/shellyplug-prometheus-exporter/blob/e36b380387887f0cb8c93412863b67caf94faa7c/src/shellyplug_exporter/plug.cr#L4"},"def":{"name":"new","visibility":"Public","body":"_ = allocate\n_.initialize\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"fetch_plug_data:JSON::Any-instance-method","name":"fetch_plug_data","doc":"Call and parse result from Shelly plug API","summary":"<p>Call and parse result from Shelly plug API</p>","abstract":false,"location":{"filename":"src/shellyplug_exporter/plug.cr","line_number":12,"url":"https://github.com/D1ceWard/shellyplug-prometheus-exporter/blob/e36b380387887f0cb8c93412863b67caf94faa7c/src/shellyplug_exporter/plug.cr#L12"},"def":{"name":"fetch_plug_data","return_type":"JSON::Any","visibility":"Public","body":"if @hostname\nelse\n  raise(MissingHostname.new(\"Missing hostname environement variable\"))\nend\nclient = HTTP::Client.new(@hostname.not_nil!, @port.to_i)\nif @http_username && @http_password\n  client.basic_auth(@http_username, @http_password)\nend\nresponse = client.get(\"/meter/0\")\nif response.status_code == 401\n  raise(InvalidCredentials.new(\"Invalid credentials\"))\nend\nif response.status_code == 200\nelse\n  return JSON.parse(\"{}\")\nend\nJSON.parse(response.body)\n"}}]},{"html_id":"shellyplug-prometheus-exporter/ShellyplugExporter/Server","path":"ShellyplugExporter/Server.html","kind":"class","full_name":"ShellyplugExporter::Server","name":"Server","abstract":false,"superclass":{"html_id":"shellyplug-prometheus-exporter/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"shellyplug-prometheus-exporter/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"shellyplug-prometheus-exporter/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/shellyplug_exporter/server.cr","line_number":2,"url":"https://github.com/D1ceWard/shellyplug-prometheus-exporter/blob/e36b380387887f0cb8c93412863b67caf94faa7c/src/shellyplug_exporter/server.cr#L2"}],"repository_name":"shellyplug-prometheus-exporter","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"shellyplug-prometheus-exporter/ShellyplugExporter","kind":"module","full_name":"ShellyplugExporter","name":"ShellyplugExporter"},"class_methods":[{"html_id":"run:Nil-class-method","name":"run","doc":"Start the listening server for Prometheus","summary":"<p>Start the listening server for Prometheus</p>","abstract":false,"location":{"filename":"src/shellyplug_exporter/server.cr","line_number":4,"url":"https://github.com/D1ceWard/shellyplug-prometheus-exporter/blob/e36b380387887f0cb8c93412863b67caf94faa7c/src/shellyplug_exporter/server.cr#L4"},"def":{"name":"run","return_type":"Nil","visibility":"Public","body":"Kemal.config.env = \"production\"\nKemal.config.host_binding = \"0.0.0.0\"\nKemal.config.port = (ENV[\"EXPORTER_PORT\"]?.presence || \"80\").to_i\nplug_instance = Plug.new\nget(\"/metrics\") do\n  plug_data = begin\n    plug_instance.fetch_plug_data\n  rescue ex : MissingHostname | InvalidCredentials\n    puts(\"No data, #{ex} !\")\n    JSON.parse(\"{}\")\n  end\n  String.build do |io|\n    io << \"# HELP power Current power drawn in watts\\n\"\n    io << \"# TYPE power gauge\\n\"\n    io << \"power #{plug_data[\"power\"]?.try(&.as_f?) || 0}\\n\"\n    io << \"# HELP total_power Total power consumed in Watt-minute\\n\"\n    io << \"# TYPE total_power gauge\"\n    io << \"total_power #{plug_data[\"total\"]?.try(&.as_i?) || 0}\\n\"\n  end\nend\nKemal.run\n"}}]}]}]}})