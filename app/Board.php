<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Message;

class Board extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'banner'
    ];

    public function messages() {
        return $this->hasMany(Message::class);
    }
}
