// script that fetches and prints how to say “Hello” depending on the language

$(document).ready(function() {
            $('#btn_translate').click(fetchTranslation);
            $('#language_code').keypress(function(event) {
                if (event.keyCode === 13) {
                    fetchTranslation();
                }
            });

            function fetchTranslation() {
                var languageCode = $('#language_code').val();
                
                // Fetch translation
                $.ajax({
                    url: 'https://www.fourtonfish.com/hellosalut/hello/',
                    method: 'GET',
                    data: { lang: languageCode },
                    success: function(response) {
                        var helloTranslation = response.hello;
                        $('#hello').text(helloTranslation);
                    },
                    error: function(xhr, status, error) {
                        console.error('Error fetching translation:', error);
                    }
                });
            }
        });
