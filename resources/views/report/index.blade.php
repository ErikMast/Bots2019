@extends('layouts.app')

@section('content')

    <div class="container">

        <div class="row justify-content-center">
            <div class="col-md-4">

                <div class="card">
                    <div class="card-header">
                        Waarom rapporteren?
                    </div>

                    <div class="card-body">
                        Onze database van aardbevingen is constant in ontwikkeling, zowel automatisch door sensoren als door
                        rapportage's van mensen. Door het invullen van dit formulier kunnen wij onze database nog completer maken.
                    </div>
                </div>


            </div>
            <div class="col-md-6">

                <div class="card">
                    <div class="card-header">
                        Rapportageformulier
                    </div>
                    <div class="card-body">

                        <form method="post" action="{{route("report.store")}}">
                            @csrf
                            <b>Coordinaten</b> <br>
                            <span id="coords">Sta locatie opvragen toe.</span>
                            <input type="hidden" name="long">
                            <input type="hidden" name="lat">
                            <br><br>
                            <label for="magnitude"><b>Ik zou de aardbeving beschrijven als, ...</b></label>
                            <select class="form-control" name="magnitude" id="magnitude">
                                <option value="1">Wordt alleen gevoeld door mensen onder speciale omstandigheden</option>
                                <option value="2">Wordt gevoeld in hoge gebouwen, opgehangen objecten (zoals lampen) kunnen schommelen</option>
                                <option value="3">Wordt goed gevoeld, vooral in hoge gebouwen, wordt niet persé gevoeld als aardbeving, voelt als een vrachtwagen die langsrijdt</option>
                                <option value="3">Wordt door bijna iedereen gevoeld, je kan het horen aan klingelend servies, voelt als een autoimpact op een gebouw</option>
                                <option value="4">Wordt door bijna iedereen gevoeld, het is angstaanjagend, meubilair is verplaatst</option>
                                <option value="5">Kleine schade aan gebouwen, veel schade aan blokhutten, veranda's, garages</option>
                                <option value="6">Redelijke schade aan gebouwen, sommige gebouwen kunnen ingestort zijn</option>
                                <option value="7">Redelijke schade aan gebouwen, er zijn gebouwen ingestort, muren zijn hevig beschadigt</option>
                                <option value="8">Treinrails is verbogen, alle houten gebouwen zijn ingestort. Hevige schade aan huizen</option>
                                <option value="9">Bruggen zijn ingestort, huizen raken van hun fundamenten, rails zijn hevig verplaatst</option>
                                <option value="10">Totale schade, objecten vliegen in het rond, flatgebouwen storten in</option>
                            </select>
                            <hr>
                            <input type="submit" value="Insturen" class="btn btn-primary">

                        </form>

                    </div>
                </div>

            </div>
        </div>
    </div>




@endsection

@section('scripts')
    <script src="{{asset('js/report.js')}}"></script>
@endsection