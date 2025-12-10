PORT ?= 9002

.PHONY: serve clean

serve:
	@echo "Starting static server on port $(PORT)..."
	@python3 -m http.server $(PORT)

clean:
	@rm -f server.log server_8001.log server_9002.log || true
	@echo "cleaned logs"
