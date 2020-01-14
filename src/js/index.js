const api_url = "http://api.scotmurphy.com"

// Borrowed from https://stackoverflow.com/a/2117523
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

$(document).ready(function() {
    var convo = $('#conversation');
    var channel = $('#channel');
    var nickname = $('#nickname');
    var chatInput = $('#chat-ui-message');
    var lastMessageId = '';

    convo.on('appendChatMessage', function(e, args) {
        lastMessageId = args.id;

        var container = convo.append(
            '<div class="form-row">'                                  +
            '    <div class="col-md-2">' + args.sender + '</div>'     +
            '    <div class="col-md-10">' + args.content + '</div>'   +
            '</div>'                                                  );

        var element = container.children().last().get(0);

        element.scrollIntoView();
        chatInput.focus();
    });

    chatInput.on('sendMessage', function(e) {
        var data = {
            id: uuidv4(),
            channel: channel.val(),
            sender: nickname.val(),
            content: chatInput.val()
        };

        postNewMessageToChannel(data);

        convo.trigger('appendChatMessage', data);
        chatInput.val(null);
    });

    chatInput.on('keydown', function(e) {
        if ((27 === e.which) || (13 === event.which)) {
            e.preventDefault();

            chatInput.trigger('sendMessage');
        }
    });

    $('#chat-ui-send').on('click', function (e) {
        chatInput.trigger('sendMessage');
    });

    function fetchChannelList(handler) {
        return $.get(api_url + '/Channels/', handler);
    }

    function fetchNewMessagesForChannel(channel, handler) {
        return $.get(api_url + '/Channels/' + channel + '/Messages/', handler);
    }

    function fetchNewMessagesForChannelAfterMessage(channel, messageId, handler) { 
        return $.get(api_url + '/Channels/' + channel + '/Messages/After/' + messageId + '/', handler);
    }

    function postNewMessageToChannel(data) {
        return $.ajax(
            api_url + '/Channels/' + data.channel + '/Messages/',
            {
                type : 'POST',
                contentType : 'application/json',
                data: JSON.stringify(data)
            });
    }

    $('#chat-ui').on('show.bs.modal', function (e) {
        $('#nicknamePrompt').modal('hide');

        $('#chat-ui-title').text(
            "Now chatting on channel "  + 
            channel.val()               + 
            " as "                      + 
            nickname.val()              + 
            "."                         );
            
        convo.empty();

        fetchNewMessagesForChannel(channel.val(), function(data) {
            data.forEach(message => convo.trigger('appendChatMessage', message));

            setInterval(() => {
                fetchNewMessagesForChannelAfterMessage(channel.val(), lastMessageId, function(data) {
                    data.forEach(message => convo.trigger('appendChatMessage', message));
                })
            }, 500);
        });
    });
});
  
  

