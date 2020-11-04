<?php
class LabsMobile
{
    private static $instance;

    private $from;
    private $key;

    /*
    array(
        'from'       => $from,
        'to'         => $to_phone,
        'type'       => $type,
        'text'       => $message,
        'api_key'    => $this->_nexmo_api_key,
        'api_secret' => $this->_nexmo_api_secret,
    )
    */

    private function LabsMobile($from, $key)
    {
        $this->from = $from;
        $this->key = $key;
    }



    public function sendSMS( $to, $msg = null, $boolean = false ) {
        //die($this->getSend($msg, [$to]));
       // return $this->stopSend($boolean);
		if (!$msg) {
			$msg = 'Hello, this is test sms message from sanchez';
		}

		$url     = "https://api.labsmobile.com/json/send";

		$data    = $this->getSend($msg, [$to]);

		$headers = array(
			"Authorization: Basic ".substr($this->key,3),
			"Cache-Control: no-cache",
			"Content-Type: application/json"
		);

		$curl = curl_init();
		curl_setopt_array($curl, array(
			CURLOPT_URL => $url,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_ENCODING => "",
			CURLOPT_MAXREDIRS => 10,
			CURLOPT_TIMEOUT => 30,
			CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
			CURLOPT_CUSTOMREQUEST => "POST",
			CURLOPT_POSTFIELDS => $data,
			CURLOPT_HTTPHEADER => $headers
		));

		$response = curl_exec($curl);
		$err = curl_error($curl);
		curl_close($curl);

		if ($boolean) {
			return !$err;
		}

		$response = json_decode($response);

		$message  = !$err ? 'Se ha enviado el sms.' : $err;

		$return = array(
			'code'    => $response->code,
			'message' => $message
		);

		return $return;
	}

	private function stopSend($boolean) {
		if ($boolean) {
			return true;
		} else {
			return $return = array(
				'code'    => 0,
				'message' => 'success'
			);
		}
	}

	private function  getSend($msg, $numbers){
        if (isset($numbers[0])) {
            $recipients = "";
            foreach ($numbers as  $number) {
                if ($recipients !== ""){
                    $recipients .= ",";
                }
                $recipients .= '{"msisdn":"'.$number.'"}';
            }

            $msg = '{"message":"'.$msg.'", "tpoa":"'.$this->from.'","recipient":['.$recipients.']}';

            return $msg;
        }
        return null;
    }


    public static function singleton($from, $key)
    {
        if (!isset(self::$instance)) {
            $c = __CLASS__;
            self::$instance = new $c($from, $key);
        }
        return self::$instance;
    }

    public function __clone()
    {
        trigger_error('La clonación de este objeto no está permitida', E_USER_ERROR);
    }
}
