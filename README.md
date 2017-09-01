This script will add a location to local google maps, as well as submitting a report to Google for determining global usage

USE - Set place object to desired values. Required = [key, lat, lng, acc, name, address, lang] Optional = [website, phone, type] - these improve chances of Google adopting globally
https://developers.google.com/places/supported_types -- for supported 'types'

Example successful output { id: '05988da36fc1ea377187700de53462af0f813ded', place_id: 'qgYvCi0wMDAwMDAzMWI2ZGQ2MDI2Ojg2MjZhNmRmYjI5OjllMTM4ZmQ0MzNhYTNjYmM', reference: 'CkQxAAAAvjH1gX7DjlfZRtLpUyJn0MwroXb7D6EIQV3kyOqeB8g3e7i-BrkCxk2YO028E1oDoDTz1tslVMRB10_6ncL66hIQ_skHy-it5oMR2wIKvAYe1BoURvt_nhNWxu4pRWCWWv2z9oYOkcc', scope: 'APP', status: 'OK' } id & place_id will be unique identifiers scope will always be APP (rather than GLOBAL)